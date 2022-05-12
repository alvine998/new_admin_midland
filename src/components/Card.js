import React from 'react';

const Card = (props) => {
    return (
        <div>
            <div class="card">
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" href='#Image'>
                    <img class="card-img-top" src={props.source} alt="Card image cap" />
                </a>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <img class="card-img-zoom" src={props.source} alt="Card image zoom" />
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.comment}</p>
                    <a href="#" class="btn btn-warning w-100">Lihat</a>
                </div>
            </div>
        </div>
    );
}

export default Card;