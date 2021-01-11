import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const CustomCard = styled(Card)({
  background: '#ffee33',
  border: 3,
  borderRadius: 10,
  minHeight: '40%',
  padding: '1rem 0',
  margin: '1rem 3rem',
  width: '100%',
  textAlign: 'center'
});

export default CustomCard;