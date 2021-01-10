import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


const ErrorCard = styled(Card)({
  background: '#f44336',
  border: 3,
  borderRadius: 10,
  minHeight: '50%',
  padding: '10px',
  margin: '10px 30px',
  width: '100%',
  textAlign: 'center',
  fontSize: '1.2em',
  fontWeight: 'bold'
});

export default ErrorCard;