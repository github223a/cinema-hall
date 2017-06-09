// @flow

import FilmScreening from './FilmScreeningRepository';
import Film from './FilmRepository';
import Price from './PriceRepository';
import CinemaHall from './CinemaHallRepository';
import User from './UserRepository';
import FilmScreeningTicket from './FilmScreening/TicketRepository';
import CapitalTransaction from './CapitalTransactionRepository';

export default {
  Price,
  CapitalTransaction,
  FilmScreening,
  FilmScreeningTicket,
  Film,
  CinemaHall,
  User,
};
