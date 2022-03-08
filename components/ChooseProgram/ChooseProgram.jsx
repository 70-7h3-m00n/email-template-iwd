import { chooseProgramStyles as stls } from './chooseProgramStyles'
import { Container, Row, Column, Link } from 'postonents'

const ChooseProgram = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>
              Новая профессия или интенсивные курсы повышения квалификации
            </p>
            <p style={stls.p}>
              Выберете для себя подходящее обучение <br /> в «Институте
              профессионального образования».
              <br /> Новую профессию можно ещё до нового года.
            </p>
            <p style={stls.testimonials}></p>
            <div style={stls.btn}>
              <Link
                href={
                  'https://ipo.msk.ru/?utm_source=email&utm_campaign=international_women_day'
                }>
                <span style={stls.link}>Выбрать программу</span>
              </Link>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default ChooseProgram
