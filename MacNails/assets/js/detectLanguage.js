// detectLanguage.js

export function detectLanguage() {
    // Detecta o idioma do navegador ou do dispositivo
    const userLang = navigator.language || navigator.userLanguage;

    // Log para ver qual idioma foi detectado (para debugging)
    console.log("Idioma detectado: ", userLang);

    // Implementar a lógica de alteração de conteúdo ou redirecionamento
    if (userLang.startsWith('pt')) {
        // Lógica para conteúdo em português
        console.log('Conteúdo ajustado para português');
        document.documentElement.lang = "pt"; // ou ajuste o conteúdo conforme necessário
    } else if (userLang.startsWith('en')) {
        // Lógica para conteúdo em inglês
        console.log('Conteúdo ajustado para inglês');
        document.documentElement.lang = "en"; // ou ajuste o conteúdo conforme necessário
    } else {
        // Lógica para qualquer outro idioma (padrão)
        console.log('Conteúdo ajustado para idioma padrão');
        document.documentElement.lang = "en"; // ou ajuste o conteúdo conforme necessário
    }
}
