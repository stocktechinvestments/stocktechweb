import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface ChartProps {
  investedAmount: number;
  interestEarned: number;
  availableAmount? : number
  activeTab : number
}

export const Charts = ({ investedAmount, interestEarned, availableAmount, activeTab }: ChartProps) => {
  const data = {
    labels: ['Invested Amount', `${activeTab === 3 ? "Withdrawal Amount" : 'Interest Earned'}`, 
      `${activeTab === 3 ? 'Available Amount' : ''}`],
    datasets: [
      {
        label: 'Amount ₹',
        data: [investedAmount, interestEarned, `${activeTab === 3 && availableAmount}`],
        backgroundColor: ['#F57328', '#5D74DD', `${activeTab === 3 ? 'rgb(255, 99, 132)' : ""}`],
        borderColor: ['#ffffff', '#ffffff', `${activeTab === 3 ? '#ffffff' : ""}`],
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    cutout: '50%',
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div>
      <Doughnut data={data} options={options} width={400} height={400} />
    </div>
  );
};
