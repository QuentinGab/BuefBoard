@extends('layouts.app')

@section('content')
<div class="hero is-primary is-fullheight">
    <div class="hero-body is-columns">
        <div class="columns">
            <div class="column is-6">
                <div class="has-text-centered">
                    <h1 class="title is-1">
                        👋 Welcome to BuefBoard
                    </h1>
                    <p class="subtitle">The best starter dashboard</p>
                </div>

            </div>
            <div class="column is-6 has-background-white has-text-dark">
                <div class="section">
                    <h1 class="title has-text-dark"> {{ __("Login") }} </h1>
                    @if(session('message'))
                        <div class="notification is-danger is-light">
                            {{ session('message') }}
                        </div>
                    @endif
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                            <div class="control has-icons-left">
                                <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                    name="email" placeholder="platon@gmail.com"
                                    value="{{ old('email') }}" required autocomplete="email"
                                    autofocus>
                                <b-icon icon="email" size="is-small is-left"></b-icon>
                            </div>
                            @error('email')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field">
                            <label class="label" for="password">{{ __('Password') }}</label>
                            <div class="control has-icons-left">
                                <input id="password" class="input @error('password') is-danger @enderror"
                                    type="password" name="password" value="{{ old('password') }}"
                                    required autocomplete="current-password">
                                <b-icon icon="key" size="is-small is-left"></b-icon>
                            </div>
                            @error('password')
                                <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field">
                            <label class="b-checkbox checkbox">
                                <input type="checkbox" id="remember" name="remember"
                                    {{ old('remember') ? 'checked' : '' }}>
                                <span class="check"></span>
                                <span class="control-label">
                                    {{ __('Remember Me') }}
                                </span>
                            </label>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit"
                                    class="button is-link">{{ __('Login') }}</button>
                            </div>
                        </div>

                        <div class="field">
                            @if(Route::has('password.request'))
                                <a class="" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                            @endif
                        </div>

                    </form>

                    <hr />

                    <div class="buttons">
                      <a href="{{ route('login.social','linkedin') }}" class="button button-linkedin">
                            <span class="icon is-large">
                                <i class="mdi mdi-24px mdi-linkedin"></i>
                            </span>
                            <span>
                                Login with LinkedIn
                            </span>
                        </a>
                        <a href="{{ route('login.social','google') }}" class="button button-google">
                            <span class="icon">
                                <img src="{{ asset('/images/social/google_g.svg') }}" alt="">
                            </span>
                            <span>
                                Login with Google
                            </span>

                        </a>
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

@endsection
