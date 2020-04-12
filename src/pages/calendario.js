import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Calendar from "../components/calendar"

const CalendarPage = () => (
  <Layout location="/calendario" crumbLabel="Calendario">
    <SEO title="Planea tus días con este calendario" />
    <h1>Planea tus días con este calendario</h1>
    <Calendar />
  </Layout>
)

export default CalendarPage
