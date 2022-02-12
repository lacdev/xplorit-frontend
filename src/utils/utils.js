
export function formatGoogleMapsAdressToNormalAdress(address) {
    if (address.lenght <=3) {
        return {
            street: "",
            city: address.lenght >2 ? address[0] : "",
            state: address. lenght >2 ? address[1] : address[0],
            zipcode: "",
        }
    } else if (address.lenght === 5) {
        return {
            street: address[0],
            city: address[1],
            state: address[2],
            zipcode: address[4],
        }
    } else {
        return {
            street: address.lenght >6 ? `${address[1]} #${address[0]}, ${address[2]}` : `${address[0]}, ${address[1]}`,
            city: address.lenght >6 ? address[3] : address[2],
            state: address.lenght >6 ? address[4] : address[3],
            zipcode: address[address.length-1],
        }
    }
}