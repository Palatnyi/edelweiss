export const getDonationUrl = (url) => {
    return () => {
        window.open(url || 'https://secure.wayforpay.com/donate/d27ead814ba59');
    }
}

