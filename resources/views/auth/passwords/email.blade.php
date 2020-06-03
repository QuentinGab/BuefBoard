@extends('layouts.app')

@section('content')
<div class="hero is-link is-fullheight">
    <div class="hero-body">
        <div class="container">
            <div class="columns">
                <div class="column is-6"></div>
                <div class="column is-6">
                    <div class="box">
                        @if (session('status'))
                        <div class="notification">
                            {{ session('status') }}
                        </div>
                        @endif

                        <h1>{{ __('Reset Password') }}</h1>
                        <form method="POST" action="{{ route('password.email') }}">
                            @csrf

                            <div class="field">
                                <label for="email" class="label">{{ __('E-Mail Address') }}</label>
                                <div class="control has-icons-left">
                                    <input id="email" class="input @error('email') is-danger @enderror" type="email"
                                        name="email" placeholder="platon@gmail.com" value="{{ old('email') }}" required
                                        autocomplete="email">
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                </div>
                                @error('email')
                                <p class="help is-danger">{{ $message }}</p>
                                @enderror
                            </div>

                            <div class="field is-grouped">
                                <div class="control">
                                    <button type="submit"
                                        class="button is-link">{{ __('Send Password Reset Link') }}</button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection
