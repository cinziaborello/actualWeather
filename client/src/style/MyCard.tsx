import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const MyCard = styled(Card)({
  background: '#fff',
  border: 3,
  borderRadius: 10,
  minHeight: '40%',
  padding: '30px',
  margin: '30px',
  width: '100%'
});

export default MyCard;