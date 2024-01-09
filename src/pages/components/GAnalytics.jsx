import Script from 'next/script'

const GAnalytics = () => {
    return (

        <div className="container">
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-VZV2D7WP5M" />
            <Script id="google-analytics">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', 'G-VZV2D7WP5M');
          `}
            </Script>
        </div>
    );
};

export default GAnalytics;
