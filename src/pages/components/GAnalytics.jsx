import Script from 'next/script'

const GAnalytics = () => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    if (!gaId) {
        return null;
    }

    return (
        <div className="container">
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <Script id="google-analytics">
                {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
  
            gtag('config', '${gaId}');
          `}
            </Script>
        </div>
    );
};

export default GAnalytics;
