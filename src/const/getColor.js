export default function GET_COLOR(type) {
  switch (type) {
    case 'grass':
      return '#006359';
    case 'fire':
      return '#fb6668';
    case 'water':
      return '#77bcfe';
    case 'bug':
      return '#62A127';
    case 'normal':
      return '#F19963';
    case 'electric':
      return '#F8D030';
    case 'poison':
      return '#A040A1';
    case 'ice':
      return '#98D8D8';
    case 'ground':
      return '#E0C069';
    case 'fairy':
      return '#FFA3B1';
    case 'fighting':
      return '#C03028';
    case 'psychic':
      return '#F85888';
    case 'rock':
      return '#B7A038';
    case 'ghost':
      return '#715898';
    case 'dragon':
      return '#7038F9';
    default:
      return '#fff';
  }
}
