if (window.location.pathname.endsWith('product.html')) {
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a');
        if (!link || !link.href) return;

        try {
            const targetUrl = new URL(link.href);
            const currentHost = window.location.host;

            sessionStorage.setItem('followUpAfterProduct', 'true');
            console.log('Follow-Up флаг установлен: уход с product.html');

            e.preventDefault();
            setTimeout(() => {
                window.location.href = link.href;
            }, 50);

        } catch (err) {
            if (link.href.startsWith('#')) return;

            sessionStorage.setItem('followUpAfterProduct', 'true');
            console.log('Follow-Up флаг установлен (некорректная ссылка)');
            e.preventDefault();
            setTimeout(() => {
                window.location.href = link.href;
            }, 50);
        }
    });
}