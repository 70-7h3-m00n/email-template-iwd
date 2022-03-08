import { HelloStyles as stls } from './helloStyles'
import { Container, Row, Column } from 'postonents'

const Hello = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row style={stls.fullwidth}>
        <Column style={stls.fullwidth}>
          <div style={stls.fullwidth}>
            <p style={stls.p} align='center'>
              Пусть Ваше настроение всегда будет весенним, смех - искренним,{' '}
              <br />
              впечатления - незабываемыми, образы - женственными <br /> и
              гармоничными!
            </p>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Hello
