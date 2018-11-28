let defaultCity = '火星'
try {
  if  (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {
  
}

export default {
  city: defaultCity
}