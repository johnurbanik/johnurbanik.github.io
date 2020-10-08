<style>
  .home-container {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 2em 0;
    min-height: 400px;
  }

  .profile-photo, .home-copy {
    flex: 1;
  }

  .profile-photo img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20vw;
    height: 20vw;
    border-radius: 50%;
    object-fit: cover;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
  }
/*
  figure {
    margin: 0 1em;
    text-align: center;
  }

  figcaption {
    font-size: .8em;
    font-style: italic;
  } */

  img {
    width: 100%;
    max-width: 400px;
  }

  @media (max-width: 1020px) {
    p {
      font-size: 1.2em;
    }

    img {
      max-width: 300px;
    }
  }

  @media (max-width: 800px) {
    .home-container {
      flex-direction: column;
    }

    .profile-photo, .home-copy {
      flex: 0;
      padding-bottom: 2em;
      text-align: center;
    }
  }
</style>

<svelte:head>
  <title>John Urbanik - Data Scientist</title>
</svelte:head>

<div class="home-container">
  <div class="profile-photo">
    <img alt="John Urbanik" src="john_small.png">
  </div>
  <div class="home-copy">
    <h2>John Urbanik</h2>
    <p>Senior Data Scientist at <a href="https://www.recursionpharma.com/">Recursion</a>.</p>
  </div>

  <!-- <figure>
    <img alt='Person typing on laptop' src='undraw-illustration.svg'>
    <figcaption>Illustration thanks to <a href="https://undraw.co" target="_blank">Undraw</a></figcaption>
  </figure> -->
</div>
