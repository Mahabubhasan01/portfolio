import React from "react";
import Star from "../../../Shared/Star";
import "./Testimonial.css";
const Testmonial = () => {
  return (
    <div className="body">
      <section class="container container--testimonials">
        <div className="container xl:max-w-6xl mx-auto px-4">
          <header className="text-center mx-auto lg:px-20">
            <Star text="TESTIMONIALS" />
          </header>
        </div>
        <div class="testimonial">
          <p class="testimonial__text mb-25">
            At first, it may be intimidating to see all of the available
            courses. Pick a track that interests you and work through it at your
            own pace.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Timmy Dicki"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="testimonial__name">Timmy Dicki</h4>
              <h5 class="testimonial__job">Railroad Engineer</h5>
            </div>
          </div>
        </div>

        <div class="testimonial">
          <p class="testimonial__text mb-25">
            I believe it would be very useful to teach cognitive neuroscience
            and psychology students all some coding skills.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1583664426440-daef00e4ad6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Valerie King"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="testimonial__name">Valerie King</h4>
              <h5 class="testimonial__job">Customer Service Representative</h5>
            </div>
          </div>
        </div>
        <div class="testimonial">
          <p class="testimonial__text mb-25">
            I had looked into learning Javascript, but was too intimidated to
            start. Codecademy was perfect: we both really like learning by
            doing.
          </p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Terrell O'Keefe"
              />
            </div>
            <div class="testimonial__info">
              <h4 class="testimonial__name">Terrell O'Keefe</h4>
              <h5 class="testimonial__job">Marketing Professional</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
