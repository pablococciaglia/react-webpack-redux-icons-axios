const axios = require('axios').default;

export const exlRequest = (orders) => {
    const locale = 'en-GB';
    const brand = 'reebok';
    const cancelDate = true;
    const netPrice = true;
    const estimateDeliveryDate = true;
    const authorization = 'Bearer 00D5r0000005EPh!ARsAQLIemzsh0vMBDX6XU5faz42zzQEF2iSbmnm6YrQqvhu40txEQsUBk1hzYl_mJIN9PTgy.SUTi.e1aWXTxVIM3G01j77B';

    axios({
        method: 'post',
        url: 'https://clapp-v2.stg.whs.adidas.com/service/orderbook2/6250049000/6255/download/xls',
        data: {
            locale,
            brand,
            cancelDate,
            netPrice,
            estimateDeliveryDate,
            ordersData: [
                {
                    orderId: "6223229164",
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
            'Request-ID': "637ba5d7-78d1-48b1-9b74-c90f051b7877",
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