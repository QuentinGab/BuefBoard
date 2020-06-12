@extends('layouts.app')

@section('content')
<div class="hero is-primary is-fullheight">
    <div class="hero-body is-columns">
        <div class="columns">
            <div class="column is-6"></div>
            <div class="column is-6 has-background-white has-text-dark">
                <div class="">
                    <h1 class="title has-text-dark"> {{__("Login")}} </h1>
                    <form method="POST" action="{{ route('login') }}">
                        @csrf
                        <div class="field">
                            <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                            <div class="control has-icons-left">
                                <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                    name="email" placeholder="platon@gmail.com" value="{{ old('email') }}" required
                                    autocomplete="email" autofocus>
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
                                    type="password" name="password" value="{{ old('password') }}" required
                                    autocomplete="current-password">
                                <b-icon icon="key" size="is-small is-left"></b-icon>
                            </div>
                            @error('password')
                            <p class="help is-danger"><strong>{{ $message }}</strong></p>
                            @enderror
                        </div>

                        <div class="field">
                            <div class="control">
                                <label class="checkbox" for="remember">
                                    <input type="checkbox" name="remember" id="remember"
                                        {{ old('remember') ? 'checked' : '' }}>
                                    {{ __('Remember Me') }}
                                </label>
                            </div>
                        </div>

                        <div class="field is-grouped">
                            <div class="control">
                                <button type="submit" class="button is-link">{{ __('Login') }}</button>
                            </div>
                        </div>

                        <div class="field">
                            @if (Route::has('password.request'))
                            <a class="" href="{{ route('password.request') }}">
                                {{ __('Forgot Your Password?') }}
                            </a>
                            @endif
                        </div>

                    </form>

                </div>
            </div>
        </div>

    </div>
</div>

@endsection
