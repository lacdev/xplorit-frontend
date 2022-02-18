//Function to take the data from the map and change it into desired structure

export function formatGoogleMapsAdressToNormalAdress(address) {
  if (address.length === 3) {
    return {
      street: "",
      city: address[0].long_name,
      state: address[1].long_name,
      zipcode: "",
    };
  } else if (address.length === 5) {
    return {
      street: address[0].long_name,
      city: address[1].long_name,
      state: address[2].long_name,
      zipcode: address[4].long_name,
    };
  } else if (address.length === 6) {
    return {
      street: `${address[0].long_name}, ${address[1].long_name}`,
      city: address[2].long_name,
      state: address[3].long_name,
      zipcode: address[address.length - 1].long_name,
    };
  } else if (address.length === 7) {
    return {
      street: `${address[1].long_name} #${address[0].long_name}, ${address[2].long_name}`,
      city: address[3].long_name,
      state: address[4].long_name,
      zipcode: address[address.length - 1].long_name,
    };
  } else if (address.length === 8) {
    return {
      street: `${address[0].long_name} #${address[1].long_name}, ${address[2].long_name}`,
      city: address[4].long_name,
      state: address[5].long_name,
      zipcode: address[address.length - 1].long_name,
    };
  }
}

// street: address.lenght >=6 ? `${address[1].long_name} #${address[0].long_name}, ${address[2].long_name}` : `${address[0].long_name}, ${address[1].long_name}`,
// city: address.lenght >=6 ? address[4].long_name : address[3].long_name,
// state: address.lenght >=6 ? address[5].long_name : address[4].long_name,
// zipcode: address[address.length-1].long_name,
