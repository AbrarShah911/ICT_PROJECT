import React from 'react';

// Sample data for Ethereum


const EthereumCard = (props) => {
  return (
    <div style={styles.card}>
     
      <div style={styles.cardContent}>
        <h2 style={styles.cardTitle}>{props.ethereumData.name} ({props.ethereumData.symbol})</h2>
        <p style={styles.cardPrice}>${props.ethereumData.price.toFixed(2)}</p>
        <p style={styles.cardInfo}>Market Cap: ${props.ethereumData.marketCap.toLocaleString()}</p>
        <p style={styles.cardInfo}>24h Volume: ${props.ethereumData.volume24h.toLocaleString()}</p>
        <p style={styles.cardInfo}>Circulating Supply: {props.ethereumData.circulatingSupply.toLocaleString()} ETH</p>
        <p
          style={{
            ...styles.cardInfo,
            color: props.ethereumData.change24h < 0 ? 'red' : 'green',
          }}
        >
          24h Change: {props.ethereumData.change24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

// Styles for the card
const styles = {
  card: {
   
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxWidth: '400px',
    color: 'white',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardTitle: {
    margin: '0',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  cardPrice: {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  cardInfo: {
    fontSize: '14px',
    margin: '5px 0',
  },
};

export default EthereumCard;
