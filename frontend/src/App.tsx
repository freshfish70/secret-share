import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { bucketRoute } from "./lib/routes/bucket.route";
import { secretRoute } from "./lib/routes/secret.route";
import IndexView from "./views/IndexView";
import RetrieveView from "./views/RetrieveView";
import SubmitView from "./views/SubmitView";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gradient-to-bl from-chambray-600 to-chambray-800 bg-no-repeat min-h-screen bg-fixed">
        <div className="container mx-auto pb-10 text-center">
          <header className="py-5">
            <h1 className="pt-10 text-3xl text-chambray-300">SECRET SHARE</h1>
            <span className="text-xs uppercase text-chambray-400">
              one way share using pub/priv keys
            </span>
          </header>
          <main className="flex justify-center my-10">
            <Router>
              <Switch>
                <Route exact path="/">
                  <IndexView />
                </Route>
                <Route path={bucketRoute.viewBucket()}>
                  <RetrieveView />
                </Route>
                <Route path={secretRoute.submitSecret()}>
                  <SubmitView />
                </Route>
              </Switch>
            </Router>
          </main>
          <div className="text-chambray-500 text-center border-chambray-500 text-xs">
            Developed by Christoffer A Træen -
            <a
              target="_blank"
              href="https://github.com/freshfish70/secret-share"
            >
              {" "}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
