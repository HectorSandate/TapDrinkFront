import "../css/RecipeForm.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../components/context/AuthContext.jsx";
import { Label } from "./cartaPrueba/ui/label.tsx";
import { Input } from "./cartaPrueba/ui/input.tsx";
import { Select } from "./cartaPrueba/ui//Select.tsx";
import { cn } from "./cartaPrueba/utils/cn.ts";

function RecetaForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    ingredientes: "",
    procedimiento: [],
    duracion: "",
    image: "",
    categoria: "",
  });

  const [licores, setLicor] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    fetch("https://taplibkback.onrender.com/api/licores/active")
      .then((response) => response.json())
      .then((data) => setLicor(data.licor))
      .catch((error) => console.error("Error al cargar licores:", error));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStep = () => {
    if (formData.procedimiento.length >= 6) {
      alert("Solo se permiten un máximo de 6 pasos.");
      return;
    }
    setFormData({
      ...formData,
      procedimiento: [...formData.procedimiento, { licor: "", cantidad: "" }],
    });
  };

  const handleRemoveStep = (index) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento.splice(index, 1);
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleStepChange = (index, e) => {
    const updatedProcedimiento = [...formData.procedimiento];
    updatedProcedimiento[index][e.target.name] = e.target.value;
    setFormData({ ...formData, procedimiento: updatedProcedimiento });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nombre", formData.nombre);
    data.append("ingredientes", formData.ingredientes);
    data.append("procedimiento", JSON.stringify(formData.procedimiento));
    data.append("duracion", formData.duracion);
    data.append("categoria", formData.categoria);
    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "https://taplibkback.onrender.com/api/recetas",
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        alert("Receta enviada con éxito");
      } else {
        alert("Error al enviar la receta");
      }
    } catch (error) {
      console.error("Error al enviar la receta:", error);
      alert("Error al enviar la receta");
    }
  };

  const botonesStyle = {
    fontFamily: "Roboto Mono, monospace",
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      return (
        formData.nombre !== "" &&
        formData.duracion !== "" &&
        formData.categoria !== ""
      );
    } else if (currentStep === 2) {
      return formData.procedimiento.every(
        (paso) => paso.licor !== "" && paso.cantidad !== ""
      );
    } else {
      return formData.image !== "";
    }
  };

  const { user } = useAuth(); // Usando el contexto para obtener la información del usuario

  return (
    <div className="flex flex-row">
      <div className="w-2/3 ">
        {user && (
          <div>
            <p>Bienvenido, {user.name}</p>{" "}
            {/* Modifica según cómo guardes el nombre en el estado */}
          </div>
        )}
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          <li
            className={`flex items-center ${
              currentStep === 1
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400"
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                currentStep === 1
                  ? "border-blue-600 dark:border-blue-500"
                  : "border-gray-500 dark:border-gray-400"
              } rounded-full shrink-0`}
            >
              1
            </span>
            <span>
              <h3 className="font-medium leading-tight">
                Información de la receta
              </h3>
              <p className="text-sm">Nombre, duración y categoría</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              currentStep === 2
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400"
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                currentStep === 2
                  ? "border-blue-600 dark:border-blue-500"
                  : "border-gray-500 dark:border-gray-400"
              } rounded-full shrink-0`}
            >
              2
            </span>
            <span>
              <h3 className="font-medium leading-tight">Procedimiento</h3>
              <p className="text-sm">Pasos de la receta</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              currentStep === 3
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400"
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                currentStep === 3
                  ? "border-blue-600 dark:border-blue-500"
                  : "border-gray-500 dark:border-gray-400"
              } rounded-full shrink-0`}
            >
              3
            </span>
            <span>
              <h3 className="font-medium leading-tight">Imagen</h3>
              <p className="text-sm">Imagen de la receta</p>
            </span>
          </li>
        </ol>

        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStep === 1 && (
            <div className="flex space-x-4">
              <div>
                <Label htmlFor="nombre">Nombre de la receta</Label>
                <Input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ingrese el nombre de la receta"
                />
              </div>
              <div>
                <Label htmlFor="duracion">Duración</Label>
                <Input
                  type="text"
                  name="duracion"
                  value={formData.duracion}
                  onChange={handleChange}
                  placeholder="Ingrese la duración"
                />
              </div>
              <div>
                <Label htmlFor="categoria">Categoría</Label>
                <Select
                  name="categoria"
                  value={formData.categoria}
                  onChange={handleChange}
                  className="px-3 py-2 rounded-md select-style"
                >
                  <option value="">Selecciona una categoría</option>
                  <option value="Sin alcohol">Sin alcohol</option>
                  <option value="Con alcohol">Con alcohol</option>
                </Select>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-2">
              <Label>Procedimiento</Label>
              {formData.procedimiento.map((paso, index) => (
                <div key={index} className="flex space-x-2">
                  <Select
                    name="licor"
                    value={paso.licor}
                    onChange={(e) => handleStepChange(index, e)}
                    className="px-3 py-2 select-style"
                  >
                    <option value="">Selecciona un licor</option>
                    {licores.map((licor) => (
                      <option key={licor._id} value={licor.nombreLicor}>
                        {licor.nombreLicor}
                      </option>
                    ))}
                  </Select>

                  <Input
                    type="number"
                    name="cantidad"
                    placeholder="Cantidad (ml)"
                    value={paso.cantidad}
                    onChange={(e) => handleStepChange(index, e)}
                  />
                  <Button
                    type="button"
                    onClick={() => handleRemoveStep(index)}
                    variant="danger"
                    className="px-3 py-2 delete-button rounded-md"
                    style={botonesStyle}
                  >
                    Eliminar
                  </Button>
                </div>
              ))}

              <Button
                type="button"
                onClick={handleAddStep}
                className="mt-2 px-3 py-2 add-button rounded-md"
                variant="info"
                style={botonesStyle}
              >
                Agregar otro paso
              </Button>
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <Label htmlFor="image">Imagen</Label>
              <input
                type="file"
                id="image"
                name="image"
                className="file-input file-input-bordered file-input-warning w-full max-w-xs"
                onChange={handleImageChange}
              />
            </div>
          )}

          <div className="flex items-center">
            {currentStep > 1 && (
              <Button
                type="button"
                onClick={handlePrev}
                className="px-3 py-2 prev-button rounded-md"
                variant="secondary"
                style={botonesStyle}
              >
                Anterior
              </Button>
            )}
            {currentStep < 3 && (
              <Button
                type="button"
                onClick={handleNext}
                className="px-3 py-2 next-button rounded-md"
                variant="primary"
                style={botonesStyle}
                disabled={!isStepValid()} // Deshabilitar si el paso no es válido
              >
                Siguiente
              </Button>
            )}
            {currentStep === 3 && (
              <Button
                type="submit"
                className="px-3 py-2 post-button rounded-md"
                variant="success"
                style={botonesStyle}
                disabled={!isStepValid()} // Deshabilitar si el paso no es válido
              >
                Enviar receta
              </Button>
            )}
          </div>
        </form>
      </div>
      <div className="w-1/4 ml-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={
                formData.image
                  ? URL.createObjectURL(formData.image)
                  : "https://previews.123rf.com/images/dxinerz/dxinerz1601/dxinerz160104276/51524801-insertar-imagen-el-color-del-icono-del-vector-image-can-tambi%C3%A9n-ser-utilizado-para-la-edici%C3%B3n-de.jpg"
              }
              alt="Receta"
              style={{
                maxWidth: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {formData.nombre || "Nombre de la receta"}
              {<p> </p>}
              {formData.duracion || "Duracion"}
              <div className="badge badge-warning">NEW</div>
            </h2>
            <h3 className="card-title">
              {formData.categoria || "Categoria de la receta"}
            </h3>
            <p>Procedimiento:</p>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Paso</th>
                    <th>Licor</th>
                    <th>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.procedimiento.map((paso, index) => (
                    <tr key={index}>
                      <td>Paso {index + 1}</td>
                      <td>{paso.licor || "-"}</td>
                      <td>{paso.cantidad ? `${paso.cantidad} ml` : "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">
                {formData.categoria || "Categoría"}
              </div>
              <div className="badge badge-outline">
                {formData.duracion || "Duración"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecetaForm;
