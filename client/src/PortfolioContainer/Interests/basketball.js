import React from "react";
import './basketball.css';


const basketball = () => {
    return (
        <><nav class="navbar navbar-expacnd-lg navbar-light bg-light shadow fixed-top" className="header_top">
            <div class="container" >
                <a class="navbar-brand" className="header_title" href="/">Return to home page</a>
            </div>
        </nav><header class="masthead">
                <div class="container h-100" className="containertable">
                    <div class="row h-100 align-items-center">
                        <div class="col-5 text-center">
                            <table class="table table-Warning table-striped" >
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Year</th>
                                        <th scope="col">Team</th>
                                        <th scope="col">Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>2002-2010</td>
                                        <td>Ikaros</td>
                                        <td>Samos A division League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>2010-2011</td>
                                        <td>Ikaros</td>
                                        <td>Greece Trird National League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>2011-2013</td>
                                        <td>Nea Ionia</td>
                                        <td>Athens Second League</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>2013-2014</td>
                                        <td>3 Asteres</td>
                                        <td>Athens Third League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>2014-2016</td>
                                        <td>3 Asteres</td>
                                        <td>Athens Second League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>2016-2017</td>
                                        <td>3 Asteres</td>
                                        <td>Athens Third League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">7</th>
                                        <td>2017-2018</td>
                                        <td>Leonteios</td>
                                        <td>Athens Fourth League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">8</th>
                                        <td>2018-2020</td>
                                        <td>Leonteios</td>
                                        <td>Athens Third League</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">9</th>
                                        <td>2020-2022</td>
                                        <td>Ikaros</td>
                                        <td>Samos A division League</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </header>
            <section class="py-1">
                <h2 class="fw-light">Here are some of my Highlights</h2>
                <div class="containerHighlights">
                    <div class="container h-100" className="containertable2">
                        <div class="row h-100 align-items-center">
                            <div class="col-5 text-center">
                                <table class="table table-danger table-striped" >
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Highlight</th>
                                            <th scope="col">Year</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Samos A division League Winner</td>
                                            <td>03,05,06</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Samos Champion Winner</td>
                                            <td>04,06,07,08,09,10</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>European Championship of Airforce schools Winner</td>
                                            <td>08</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Championship of military schools Winner</td>
                                            <td>10,11</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Promotion to Athens Second League</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Promotion to Athens Third League</td>
                                            <td>18</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default basketball;
