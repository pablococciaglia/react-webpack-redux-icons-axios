const axios = require('axios').default;

export const exlRequest = (orders) => {
    const locale = 'en-GB';
    const brand = 'reebok';
    const cancelDate = true;
    const netPrice = true;
    const estimateDeliveryDate = true;
    const authorization = 'Token xxx123';

    axios({
        method: 'post',
        url: 'https://www.webpage.com/{clientNumber}/1234/download/xls',
        data: {
            locale,
            brand,
            cancelDate,
            netPrice,
            estimateDeliveryDate,
            ordersData: [
                {
                    orderId: "00001",
                    sourceIdentifier: "NWGW",
                    serviceIdentifier: "orders",
                    clickDocumentType: "reorder",
                }
            ]
        },
        responseType: 'arraybuffer',
        headers: {
            authorization,
            'Content-Type': "application/json",
            'Request-ID': "magicID",
        },
    })
    .then(function (response) {
    // handle success
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'template.zip');
        document.body.appendChild(link);
        link.click();
    })
    .catch(function (error) {
    // handle error
        console.log(error);
    })
    .then(function () {
        console.log('Some final task')
    });
}