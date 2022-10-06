import {faker} from '@faker-js/faker';

import {IListItem} from '../screens/list';

const list_data: IListItem[] = [];

const createRandomData = () => {
  const price = faker.commerce.price();
  const priceInt = parseFloat(faker.commerce.price());
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: price,
    salePrice: faker.helpers.maybe(
      () => faker.commerce.price(priceInt * 0.5, priceInt * 0.9),
      {probability: 0.1},
    ),
    brand: faker.company.name(),
  };
};

Array.from({length: 1500}).forEach(() => {
  list_data.push(createRandomData());
});

export default list_data;
