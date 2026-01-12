// image-popup.js - Versão Garantida
console.log('🚀 Iniciando visualizador de imagem...');

// Esperar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ DOM Carregado - Iniciando visualizador...');
    
    // Criar o modal imediatamente
    criarModal();
    
    // Configurar as imagens do portfólio
    configurarImagensPortfolio();
});

function criarModal() {
    // Remover modal existente se houver
    const modalExistente = document.getElementById('imageModal');
    if (modalExistente) {
        modalExistente.remove();
    }

    // Criar novo modal
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.innerHTML = `
        <div class="modal-content">
            <img id="modalImage" src="" alt="Imagem ampliada">
            <button id="closeModal" class="close-btn">×</button>
            <div class="modal-controls">
                <button class="control-btn" id="zoomIn" title="Zoom In">+</button>
                <button class="control-btn" id="zoomOut" title="Zoom Out">-</button>
                <button class="control-btn" id="resetZoom" title="Resetar Zoom">⟲</button>
                <button class="control-btn" id="downloadImage" title="Download">⤓</button>
            </div>
        </div>
    `;

    // Estilos do modal
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 95%;
        max-height: 95%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: default;
    `;

    const modalImg = modal.querySelector('#modalImage');
    modalImg.style.cssText = `
        max-width: 60%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transition: transform 0.3s ease;
    `;

    const controls = modal.querySelector('.modal-controls');
    controls.style.cssText = `
        position: absolute;
        bottom: -20%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        background: rgba(37, 37, 37, 0.7);
        padding: 10px 15px;
        border-radius: 25px;
        transition: all 0.3s ease;
    `;

    const controlBtns = modal.querySelectorAll('.control-btn');
    controlBtns.forEach(btn => {
        btn.style.cssText = `
            background: rgba(158, 158, 158, 0.15);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
        `;
    });

    // Adicionar ao body
    document.body.appendChild(modal);
    console.log('✅ Modal criado com sucesso!');

    // Configurar eventos do modal
    configurarEventosModal();
}

function configurarEventosModal() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeModal');
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    const resetZoom = document.getElementById('resetZoom');
    const downloadImage = document.getElementById('downloadImage');

    // Função para abrir modal
    window.openImageModal = function(src) {
        console.log('📸 Abrindo imagem:', src);
        modalImg.src = src;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        resetarZoom();
    };

    // Função para fechar modal
    function fecharModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        resetarZoom();
    }

    // Função de zoom
    function aplicarZoom(scale) {
        const currentScale = parseFloat(modalImg.style.transform.replace('scale(', '').replace(')', '')) || 1;
        const newScale = currentScale * scale;
        
        if (newScale >= 0.1 && newScale <= 5) {
            modalImg.style.transform = `scale(${newScale})`;
        }
    }

    function resetarZoom() {
        modalImg.style.transform = 'scale(1)';
    }

    function baixarImagem() {
        const link = document.createElement('a');
        link.href = modalImg.src;
        link.download = 'design-' + Date.now() + '.jpg';
        link.click();
    }

    // Event listeners
    closeBtn.addEventListener('click', fecharModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) fecharModal();
    });
    zoomIn.addEventListener('click', () => aplicarZoom(1.2));
    zoomOut.addEventListener('click', () => aplicarZoom(0.8));
    resetZoom.addEventListener('click', resetarZoom);
    downloadImage.addEventListener('click', baixarImagem);

    // Teclado
    document.addEventListener('keydown', function(e) {
        if (modal.style.display !== 'flex') return;
        
        switch(e.key) {
            case 'Escape': fecharModal(); break;
            case '+': case '=': e.preventDefault(); aplicarZoom(1.2); break;
            case '-': e.preventDefault(); aplicarZoom(0.8); break;
            case '0': e.preventDefault(); resetarZoom(); break;
        }
    });

    console.log('✅ Eventos do modal configurados!');
}

function configurarImagensPortfolio() {
    // Tentar diferentes seletores
    const seletores = [
        '.portfolio-item img',
        '.portfolio-grid img',
        '.portfolio-item > img',
        '[data-category] img'
    ];

    let imagens = [];

    for (let seletor of seletores) {
        const encontradas = document.querySelectorAll(seletor);
        if (encontradas.length > 0) {
            imagens = encontradas;
            console.log(`✅ Encontradas ${imagens.length} imagens com seletor: ${seletor}`);
            break;
        }
    }

    // Se não encontrou com seletores, buscar manualmente
    if (imagens.length === 0) {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            const img = item.querySelector('img');
            if (img) imagens.push(img);
        });
        console.log(`✅ Encontradas ${imagens.length} imagens manualmente`);
    }

    // Configurar cada imagem
    imagens.forEach((img, index) => {
        console.log(`🖼️ Configurando imagem ${index + 1}:`, img.src);
        
        img.style.cursor = 'zoom-in';
        
        // Remover event listeners existentes
        const novaImg = img.cloneNode(true);
        img.parentNode.replaceChild(novaImg, img);
        
        // Adicionar novo event listener
        novaImg.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('🎯 Clique registrado na imagem:', this.src);
            window.openImageModal(this.src);
        });

        // Também permitir clique no overlay
        const overlay = novaImg.closest('.portfolio-item').querySelector('.portfolio-overlay');
        if (overlay) {
            overlay.style.cursor = 'pointer';
            overlay.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('🎯 Clique registrado no overlay');
                window.openImageModal(novaImg.src);
            });
        }
    });

    console.log(`🎉 Visualizador configurado para ${imagens.length} imagens!`);
    
    // Forçar teste se não há imagens
    if (imagens.length === 0) {
        console.warn('⚠️ Nenhuma imagem encontrada! Verifique os seletores.');
        testeForcado();
    }
}

// Função de teste forçado
function testeForcado() {
    console.log('🔧 Executando teste forçado...');
    
    // Criar uma imagem de teste
    const testImage = document.createElement('img');
    testImage.src = 'https://via.placeholder.com/400x300/FF6B6B/FFFFFF?text=TESTE+CLIQUE+AQUI';
    testImage.style.cssText = 'width: 200px; height: 150px; cursor: pointer; border: 2px solid red; margin: 20px;';
    testImage.alt = 'Imagem de Teste';
    
    testImage.addEventListener('click', function() {
        console.log('🎯 TESTE: Clique funcionou!');
        window.openImageModal(this.src);
    });
    
    // Adicionar no início do body para teste
    document.body.insertBefore(testImage, document.body.firstChild);
    console.log('🧪 Imagem de teste adicionada - Clique nela para testar!');
}

// Também inicializar quando a window carregar (backup)
window.addEventListener('load', function() {
    console.log('🔄 Window loaded - Verificando visualizador...');
    
    // Re-configurar se necessário
    if (!document.getElementById('imageModal')) {
        console.log('🔄 Recriando modal...');
        criarModal();
        configurarImagensPortfolio();
    }
});

console.log('🎯 Script carregado - Aguardando DOM...');