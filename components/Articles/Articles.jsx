import { articlesStyles as stls } from './articlesStyles'
import { Container, Row, Column, Link } from 'postonents'

const Articles = () => {
  return (
    <Container alignment='center' style={stls.container}>
      <Row>
        <Column style={stls.column}>
          <div style={stls.fullwidth}>
            <p style={stls.title}>Официально заявляем!</p>
            <p style={stls.p}>
              Нам надоела зима! <br />
              Хотим тепла, солнца, красоты и Весны! <br />
              Присоединяйтесь к нашим тёплым, Весенним группам, <br /> которые
              начинают обучение с <span style={stls.highlight}>21 марта</span>.
            </p>
            <div style={stls.btn}>
              <Link
                href={
                  'https://ipo.msk.ru/?utm_source=email&utm_campaign=international_women_day'
                }>
                <span style={stls.link}>Присоединится!</span>
              </Link>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  )
}

export default Articles
