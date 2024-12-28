import React, { Suspense } from "react";
import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";

const HomePage = React.lazy(() => import("./pages/homepage/HomePage"));
const SignUpForm = React.lazy(() => import("./pages/auth/SignupPage"));
const SignInForm = React.lazy(() => import("./pages/auth/LoginPage"));
const ReviewsPage = React.lazy(() => import("./pages/reviews/ReviewsPage"));
const ReviewCreateForm = React.lazy(() =>
  import("./pages/reviews/ReviewCreateForm")
);
const ReportsPage = React.lazy(() => import("./pages/reports/ReportsPage"));
const NotFound = React.lazy(() => import("./components/NotFound"));

const Loader = () => <div className={styles.Loader}>Loading...</div>;

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInForm} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route exact path="/reviews" component={ReviewsPage} />
            <Route
              exact
              path="/reviews/create"
              component={ReviewCreateForm}
            />
            <Route exact path="/reports" component={ReportsPage} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </div>
  );
}

export default App;
