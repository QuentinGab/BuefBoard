@extends('layouts.app')

@section('content')

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
            <a class="navbar-item">
                <img src="{{ asset('images/LOGO.svg') }}" alt="Logo">
            </a>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
            <div class="navbar-end">
                <a class="navbar-item" href="{{ route('login') }}">
                    Login
                </a>
                <a class="navbar-item" href="{{ route('register') }}">
                    Register
                </a>
                <span class="navbar-item">
                    <b-button tag="a" icon-left="github" href="https://github.com/QuentinGab/BuefBoard" target="_blank">
                        github
                    </b-button>
                </span>
            </div>
        </div>
    </div>
</nav>
<section class="hero is-fullheight-with-navbar">
    <div class="section">
        <div class="has-text-centered">
            <h1 class="title is-1">
                BuefBoard
            </h1>
            <p class="subtitle">
                The best Laravel/VueJS/Bulma Dashboard
            </p>
        </div>
    </div>

    <div class="columns is-centered is-marginless">
        <div class="column is-12-tablet is-9-fullhd is-10-desktop">
            <div class="card">
                <figure class="image">
                    <img src="{{ asset("images/buefboard.gif") }}" alt=""
                        srcset="">
                </figure>
            </div>
        </div>
    </div>
</section>

@endsection
