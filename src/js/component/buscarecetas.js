import React from "react";


export const BuscadorRecetas = () => {
    const { store, actions } = useContext(Context);
	return (<div className="container text-center">
                <form>
                    <div className="form-group my-5">
                        <input type="search" className="form-control" placeholder="Busca tu receta🔎" />
                    </div>
                </form>
            </div>)
};
