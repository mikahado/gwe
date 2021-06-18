import React from "react";

import "./table.css";

export function Table(props) {
  return (
    <table>
      <thead>
        <th>Greenhouse Gas</th>
        <th>Major Sources</th>
      </thead>
      <tr>
        <td>Carbon Dioxide</td>
        <td>
          <ul>
            <li>Fossil fuel combustion</li>
            <li>Deforestation</li>
            <li>Cement production</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Methane</td>
        <td>
          <ul>
            <li>Fossil fuel production</li>
            <li>Agriculture</li>
            <li>Landfills</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Nitrous Oxide</td>
        <td>
          <ul>
            <li>Fertilizer application</li>
            <li>Fossil fuel and biomass combustion</li>
            <li>Industrial processes</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Water Vapor</td>
        <td>Evaporation</td>
      </tr>
    </table>
  );
}
