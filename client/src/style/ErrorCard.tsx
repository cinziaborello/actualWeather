import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const ErrorCard = styled(Card)({
  background: '#f44336',
  border: 3,
  borderRadius: 10,
  minHeight: '50%',
  padding: '10px',
  marginTop: '30px',
  width: '100%',
});

export default ErrorCard;