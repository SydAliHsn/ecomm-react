import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="layout">
      <div className="horizontal-layout">
        <Header />

        <div className="content container" style={{ minHeight: '100vh' }}>
          <div className="main">
            <div className="pricing mt-3">
              <div class="pricing__container container">
                <div class="text-center lead mt-4">
                  <h1 class="mb-3">Pricing Plan</h1>
                  <p class="mx-auto" style={{ maxWidth: '500px' }}>
                    We have sevaral powerful plans for our service, find
                    yourself a suitable plan from the below price list.
                  </p>
                </div>
                <div class="row mt-5">
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$0</span>
                          <span class="font-size-base text-muted">
                            / per month
                          </span>
                        </h2>
                        <h4>Free</h4>
                        <p>Free plan suitable for personal use.</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">200 MB of Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">5 Add on Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$30</span>
                          <span class="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Standard</h4>
                        <p>Standard plan suitable for most enterprise level</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">500 MB of Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">10 Add on Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Microsoft Office 365</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Smart Sync</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="card">
                      <div class="card-body">
                        <h2 class="mb-4">
                          <span class="fw-bolder">$50</span>
                          <span class="font-size-base text-muted">
                            {' '}
                            / per month
                          </span>
                        </h2>
                        <h4>Premium</h4>
                        <p>Basic plan suitable for large scale business</p>
                        <ul class="list-unstyled mt-5">
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Unlimited Spaces</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Unlimited Domains</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Chat Support</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Microsoft Office 365</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Smart Sync</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Analytic Platform</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">Amazingness</span>
                          </li>
                          <li class="mb-4 fw-bold">
                            <div class="d-inline-block rounded-circle">
                              <i class="mb-0 px-1 feather icon-check"></i>
                            </div>
                            <span class="ms-2">More Amazingness</span>
                          </li>
                        </ul>
                        <div class="mt-5">
                          <button class="btn w-100 btn-outline-primary">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Pricing;