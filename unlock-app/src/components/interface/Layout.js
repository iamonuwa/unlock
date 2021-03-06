import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import Logo from './Logo'
import { Link } from 'react-router-dom'

export default function Layout({ forContent, title, children }) {
  return (
    <Container>
      <Left>
        {!forContent &&
          <Link to={'/'}>
            <Logo />
          </Link>
        }
      </Left>
      <Content>
        <Header forContent={forContent} title={title} />
        {children}
        {forContent &&
          <Footer />
        }
      </Content>
      <Right />
    </Container>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  forContent: PropTypes.bool,
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 4fr) 1fr;
`

const Left = styled.div`
  padding: 8px;
  display: grid;
  align-items: start;
  height: 24px;
`

const Right = styled.div`
`

const Content = styled.div`
  color: var(--darkgrey);
  display: grid;
  row-gap: 24px;
`
