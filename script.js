document.getElementById('botaoMenu').addEventListener('click', function() {
            document.getElementById('menuPrincipal').classList.toggle('mostrar');
        });
        
        
        document.getElementById('botaoDetalhes').addEventListener('click', function() {
            alert('Nosso sistema de bombas tem:\n\n- Capacidade de bombear 500 litros por minuto\n- Bateria com 72h de autonomia\n- Sensor de nível preciso\n- Vida útil de 5 anos');
        });
        
        
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
        
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.video-pitch');
            const botaoPlay = document.getElementById('botaoPlay');
            
            if (video && botaoPlay) {
                
                video.removeAttribute('controls');
                
               
                video.addEventListener('play', function() {
                    video.setAttribute('controls', 'true');
                    botaoPlay.style.display = 'none';
                });
                
                
                botaoPlay.addEventListener('click', function() {
                    video.play().catch(error => {
                        console.error("Erro ao reproduzir:", error);
                        
                        video.setAttribute('controls', 'true');
                    });
                });
                
                
                video.addEventListener('pause', function() {
                    if (!video.ended) {
                        botaoPlay.style.display = 'flex';
                        video.removeAttribute('controls');
                    }
                });
                
                
                video.addEventListener('ended', function() {
                    video.setAttribute('controls', 'true');
                });
            }
        });