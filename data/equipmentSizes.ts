const shoes = [
  { label: '220', value: '220' },
  { label: '225', value: '225' },
  { label: '230', value: '230' },
  { label: '235', value: '235' },
  { label: '240', value: '240' },
  { label: '245', value: '245' },
  { label: '250', value: '250' },
  { label: '255', value: '255' },
  { label: '260', value: '260' },
  { label: '265', value: '265' },
  { label: '270', value: '270' },
  { label: '275', value: '275' },
  { label: '280', value: '280' },
  { label: '285', value: '285' },
  { label: '290', value: '290' },
  { label: '295', value: '295' },
  { label: '300', value: '300' },
];

const suit = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
];

const mask = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
];

const weight = [
  { label: '1kg', value: '1' },
  { label: '2kg', value: '2' },
  { label: '3kg', value: '3' },
  { label: '4kg', value: '4' },
  { label: '5kg', value: '5' },
  { label: '6kg', value: '6' },
  { label: '7kg', value: '7' },
  { label: '8kg', value: '8' },
  { label: '9kg', value: '9' },
  { label: '10kg', value: '10' },
  { label: '11kg', value: '11' },
  { label: '12kg', value: '12' },
  { label: '13kg', value: '13' },
  { label: '14kg', value: '14' },
  { label: '15kg', value: '15' },
  { label: '16kg', value: '16' },
  { label: '17kg', value: '17' },
  { label: '18kg', value: '18' },
  { label: '19kg', value: '19' },
  { label: '20kg', value: '20' },
];

const bc = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
];

const equipmentSizes = {
  '슈즈': {
    key: 'shoes',
    sizes: shoes,
  },
  '수트': {
    key: 'suit',
    sizes: suit,
  },
  '마스크': {
    key: 'mask',
    sizes: mask,
  },
  '웨이트': {
    key: 'weightBelt',
    sizes: weight,
  },
  'BC': {
    key: 'bc',
    sizes: bc,
  },
};

export default equipmentSizes;