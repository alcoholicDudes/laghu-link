import AddCard from 'pages/addCard'
import AboutClo from 'pages/aboutClo'
import CloTutorial from 'pages/cloTutorial'
import MyCards from 'pages/myCards'
import MerchantList from 'pages/merchantList'

export default [
  {
    path: '/',
    exact: true,
    component: CloTutorial,
    private: true,
  },
  {
    path: '/add-card',
    exact: true,
    component: AddCard,
    private: true,
  },
  {
    path: '/about',
    exact: true,
    component: AboutClo,
    private: true,
  },
  {
    path: '/my-cards',
    exact: false,
    component: MyCards,
    private: true,
    // my card page has nested routing:
    /*

    '/': MY_CARDS
    '/security-safety' : SECURITY_SAFETY
    '/cardId' : CARD_DETAILS
    'cardId/offers' : SELECT_OFFERS
    'cardId/offers/offerId': PRE_FILLDED_CARD
    'cardId/congratulations': CONGRATULATIONS_ANIMATION
    */
  },
  {
    path: '/offers',
    exact: false,
    component: MerchantList,
    private: true,
    // offers page has nested routing:
    /*

    '/': MERCHANTS
    '/merchantId' : MERCHANT_DETAILS
    */
  },
]
