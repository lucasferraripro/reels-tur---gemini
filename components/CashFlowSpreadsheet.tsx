import React from 'react';

const CashFlowSpreadsheet: React.FC = () => {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    const headerCellStyle = "p-2 border border-gray-300 dark:border-gray-600 bg-blue-800 text-white font-bold text-sm min-w-[80px]";
    const categoryCellStyle = "p-2 border border-gray-300 dark:border-gray-600 bg-blue-800 text-white font-bold text-left";
    const labelCellStyle = "p-2 border border-gray-300 dark:border-gray-600 font-semibold bg-gray-100 dark:bg-gray-700 text-left text-sm whitespace-nowrap";
    const valueCellStyle = "p-2 border border-gray-300 dark:border-gray-600 text-right text-sm";
    const totalRowStyle = "bg-green-200 dark:bg-green-800/50 font-bold";

    const renderValueCells = () => months.map(month => <td key={month} className={valueCellStyle}>R$ -</td>);
    const renderEmptyValueCells = () => <td colSpan={12} className={valueCellStyle}></td>

    return (
        <div className="text-gray-800 dark:text-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4 text-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">
                    <span className="font-bold block">Lucro Líquido Total:</span>
                    <span>R$0.000</span>
                </div>
                 <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-lg">
                    <span className="font-bold block">Despesas Totais:</span>
                    <span>R$0.000</span>
                </div>
                 <div className="p-3 bg-yellow-100 dark:bg-yellow-900/50 rounded-lg">
                    <span className="font-bold block">Poupança e Investimentos:</span>
                    <span>R$0.000</span>
                </div>
                 <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-lg">
                    <span className="font-bold block">Pagamento dívidas:</span>
                    <span>R$0.000</span>
                </div>
                <div className="p-3 bg-green-100 dark:bg-green-900/50 rounded-lg">
                    <span className="font-bold block">Dinheiro sobrando:</span>
                    <span>R$0.000</span>
                </div>
            </div>
             <div className="mb-4">
                <label htmlFor="year-select" className="font-bold mr-2">Ano:</label>
                <input type="number" id="year-select" defaultValue="2025" className="p-2 rounded bg-green-200 dark:bg-green-800 border border-green-400 dark:border-green-600 font-bold w-28" />
            </div>

            <table className="w-full border-collapse table-auto">
                <thead>
                    <tr>
                        <th className={`${headerCellStyle} text-left`}>Entrada</th>
                        {months.map(month => <th key={month} className={headerCellStyle}>{month}</th>)}
                        <th className={headerCellStyle}>Total Anual</th>
                        <th className={headerCellStyle}>Média Mensal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={labelCellStyle}>Salário</td>
                        {renderValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Bonus</td>
                        {renderValueCells()}
                         <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Venda de serviços</td>
                        {renderValueCells()}
                         <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Venda de produtos</td>
                        {renderValueCells()}
                         <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Renda de aluguel</td>
                        {renderValueCells()}
                         <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Outras rendas</td>
                        {renderValueCells()}
                         <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr className={totalRowStyle}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Total receitas</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    {/* Spacer row */}
                    <tr><td colSpan={15} className="py-2"></td></tr>

                    {/* Despesas */}
                    <tr>
                        <td className={categoryCellStyle} colSpan={15}>Despesas</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Salário (pré-labore)</td>
                        {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Contador</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Guia do INSS</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Despesas locomoção</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Despesas refeição</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Despesas telefone</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Despesas de internet</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Compra de produtos</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr className={totalRowStyle}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Trabalho Total</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr>
                        <td className={labelCellStyle}>Parcela do carro</td>
                        {renderValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Seguro do carro</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Gasolina</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Manutenção e reparo</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Transporte público</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Uber</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr className={totalRowStyle}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Transporte Total</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Mercearia</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Internet</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Telefone</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Contas médicas</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Diversos</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr className={totalRowStyle}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Total pessoal</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Comer fora</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Lazer</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Viagens</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Assinaturas (netflix...)</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                     <tr>
                        <td className={labelCellStyle}>Doação</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr>
                        <td className={labelCellStyle}>Academia</td>
                         {renderEmptyValueCells()}
                        <td className={`${valueCellStyle} font-bold`}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    <tr className={totalRowStyle}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Total de gastos pessoais</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                    {/* Grand Total */}
                     <tr className={`${totalRowStyle} border-t-4 border-black dark:border-white`}>
                        <td className={`${labelCellStyle} ${totalRowStyle}`}>Total Despesas</td>
                        {months.map(m => <td key={m} className={valueCellStyle}>R$ -</td>)}
                        <td className={valueCellStyle}>R$ -</td>
                        <td className={valueCellStyle}>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CashFlowSpreadsheet;
