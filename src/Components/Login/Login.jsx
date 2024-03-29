import React, { Component } from 'react'
import fire from '../../config/fire';
import logo from "../../images/workflow-mark-on-white.svg"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u) => {
            console.log(u);
        }).catch((err) => {
            console.log(err);
        });
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    render() {
        return (
            <div className="AppLogin">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        <div>
                            <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow" />
                            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                            Sign in to your account
                            </h2>
                        </div>
                        <form className="mt-8" action="#" method="POST">
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm">
                                <div>
                                    <input aria-label="Email address" name="email" type="email" onChange={this.handleChange} value={this.state.email} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />
                                </div>
                                <br />
                                <div className="-mt-px">
                                    <input aria-label="Password" name="password" type="password" onChange={this.handleChange} value={this.state.password} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />
                                </div>
                                <div className="mt-6 flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                
                            </div>
                        <div className="mt-6">
                            <button onClick={this.login} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        )
    }
}
