import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ListingsProvider } from "./contexts/ListingContext";
import { NotificationsProvider } from "./contexts/NotificationsContext";
import { ReviewsProvider } from "./contexts/ReviewsContext";

ReactDOM.render(
  <Router>
    <AuthProvider>
      <FavoritesProvider>
        <ListingsProvider>
          <NotificationsProvider>
            <ReviewsProvider>
              <App />
            </ReviewsProvider>
          </NotificationsProvider>
        </ListingsProvider>
      </FavoritesProvider>
    </AuthProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
