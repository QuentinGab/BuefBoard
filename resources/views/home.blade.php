@extends('layouts.app')

@section('content')

<section class="hero is-large">
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <img src="{{ asset('images/LOGO.png') }}" alt="Logo">
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
                            <b-button tag="a" icon-left="github" href="https://github.com/QuentinGab/BuefBoard"
                                target="_blank">
                                github
                            </b-button>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>

    <div class="hero-body">
        <div class="container">
            <p class="title">
                Title
            </p>
            <p class="subtitle">
                Subtitle
            </p>
        </div>
    </div>
</section>

@endsection
