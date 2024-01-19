import React from 'react';
import './PokemonTableRow.scss'

interface PokemonTableRowProps {
  label: string;
  value: string | number;
}

export const PokemonTableRow: React.FC<PokemonTableRowProps> = ({ label, value }) => (
  <tr>
    <td className="row__property">{label}</td>
    <td className="row__value">{value}</td>
  </tr>
);
