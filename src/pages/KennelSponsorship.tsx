import React from "react";

const KennelSponsorship: React.FC = () => {
  // Properly typed styles object
  const styles: Record<string, React.CSSProperties> = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      color: "#333"
    },
    section: {
      marginBottom: "40px"
    },
    heading1: {
      color: "#2c3e50",
      fontSize: "2em",
      marginBottom: "20px"
    },
    paragraph: {
      lineHeight: 1.6,
      marginBottom: "15px"
    },
    list: {
      margin: "20px 0",
      paddingLeft: "20px"
    },
    listItem: {
      marginBottom: "10px"
    },
    actionButtons: {
      display: "flex",
      gap: "15px",
      marginTop: "25px"
    },
    sponsorButton: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#e74c3c",
      color: "white"
    },
    volunteerButton: {
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      fontWeight: "bold",
      cursor: "pointer",
      backgroundColor: "#3498db",
      color: "white"
    },
    residentsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
      gap: "30px",
      marginTop: "40px"
    },
    residentCard: {
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      padding: "20px",
      height: "100%",
      boxSizing: "border-box"
    },
    residentName: {
      color: "#8e44ad",
      fontSize: "1.5em",
      marginBottom: "10px"
    },
    residentAge: {
      color: "#16a085",
      fontSize: "1.2em",
      margin: "15px 0"
    },
    medicalHistory: {
      width: "100%",
      borderCollapse: "collapse",
      margin: "15px 0"
    },
    medicalCell: {
      padding: "8px",
      border: "1px solid #ddd"
    },
    medicalHeader: {
      width: "120px",
      fontWeight: "bold",
      backgroundColor: "#f2f2f2"
    },
    historyHeading: {
      color: "#2c3e50",
      fontSize: "1.1em",
      margin: "15px 0 10px"
    },
    callToAction: {
      fontWeight: "bold" as "bold",
      color: "#e74c3c",
      margin: "20px 0 0",
      fontStyle: "italic" as "italic",
      textAlign: "center" as "center",
      padding: "10px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px"
    },
    divider: {
      border: "0",
      height: "1px",
      backgroundColor: "#ddd",
      margin: "15px 0"
    }
  };

  // Media query handling (for React inline styles, consider using a CSS-in-JS solution)
  const isMobile = window.innerWidth < 1000;
  if (isMobile) {
    styles.residentsGrid.gridTemplateColumns = "1fr";
  }

  return (
    <div style={styles.container}>
      {/* Top Section: Rescues in Boarding */}
      <section style={styles.section}>
        <h1 style={styles.heading1}>Rescues in Boarding</h1>
        <p style={styles.paragraph}>
          As much as we try to find all our rescues a loving foster home, some of these rescues require specialised care and have to be boarded at the kennel. Our team and volunteers diligently head down often to help rehabilitate and socialise with them. Our greatest wish and the ultimate goal is to get them ready for their forever home.
        </p>
        
        <h2 style={styles.historyHeading}>How you can help us to help them:</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Sponsor their boarding fees of $490 per dog per month (*30% inflation since 2022)</li>
          <li style={styles.listItem}>Offset their expenses (medical/food)</li>
          <li style={styles.listItem}>Volunteer with us to continue to rehabilitate and socialise them</li>
        </ul>

        <div style={styles.actionButtons}>
          <button style={styles.sponsorButton}>Sponsor</button>
          <button style={styles.volunteerButton}>Volunteer</button>
        </div>
      </section>

      {/* Long-term Residents Section */}
      <section>
        <h1 style={styles.heading1}>Our long-term residents</h1>

        <div style={styles.residentsGrid}>
          {/* Resident 1: Cookie-Girl */}
          <div style={styles.residentCard}>
            <h2 style={styles.residentName}>Cookie-Girl</h2>
            <hr style={styles.divider} />
            <h3 style={styles.residentAge}>6 Years +</h3>
            
            <table style={styles.medicalHistory}>
              <tbody>
                <tr>
                  <td style={{...styles.medicalCell, ...styles.medicalHeader}}><strong>Medical History</strong></td>
                  <td style={styles.medicalCell}>Urinary Infection (Cleared), Skin Infection</td>
                </tr>
                <tr>
                  <td style={{...styles.medicalCell, ...styles.medicalHeader}}><strong>Bite History</strong></td>
                  <td style={styles.medicalCell}>3 bite history, worst bite incident happened in Feb 2022 requiring 2 surgeries and 40+ stitches.</td>
                </tr>
              </tbody>
            </table>

            <h4 style={styles.historyHeading}>History</h4>
            <p style={styles.paragraph}>
              Cared by an elderly couple for 6 years, Cookie had zero exposure to the world. In Jan 2022, the elderly couple had to give up Cookie because they were downgrading to a one-room flat. A kind couple decided to adopt her upon seeing her post.
            </p>
            <p style={styles.paragraph}>
              The couple brought her to the vet for a full-body check-up and treated her skin and urinary infection. While the wife was ushering Cookie to the bathroom, Cookie reacted. The wife suffered from multiple bites and was hospitalised. As this was a traumatic experience for the wife, they could no longer continue to care for her.
            </p>
            <p style={styles.paragraph}>
              LTV decided to step in to help Cookie. She is boarded at the kennel due to the bite history. We foresee she may need a long-time for rehabilitation. In the meantime, we are doing our best to socialise and give her lots of TLC!
            </p>
            <p style={styles.paragraph}>
              We will continue to review and assess how we can manage her and eventually find her the home she deserves.
            </p>

            <p style={styles.callToAction}>Help us to help her, sponsor her boarding!</p>
          </div>

          {/* Resident 2: Scooby-Boo */}
          <div style={styles.residentCard}>
            <h2 style={styles.residentName}>Scooby-Boo</h2>
            <hr style={styles.divider} />
            <h3 style={styles.residentAge}>7 Years +</h3>
            
            <table style={styles.medicalHistory}>
              <tbody>
                <tr>
                  <td style={{...styles.medicalCell, ...styles.medicalHeader}}><strong>Medical History</strong></td>
                  <td style={styles.medicalCell}>Liver/Kidney failure, Ehrlichia positive.</td>
                </tr>
                <tr>
                  <td style={{...styles.medicalCell, ...styles.medicalHeader}}><strong>Bite History</strong></td>
                  <td style={styles.medicalCell}>3 bite history.</td>
                </tr>
              </tbody>
            </table>

            <h4 style={styles.historyHeading}>History</h4>
            <p style={styles.paragraph}>
              Found in 2018, Scooby was thought to be a lost dog. He now responds to commands, was not too apprehensive of the leash and was toilet trained. We waited and waited but alas, nobody came forward to claim him. We suspect he was abandoned.
            </p>
            <p style={styles.paragraph}>
              In 2020, an adopter decided to open his home to Scooby. Unfortunately, there were two incidents where Scooby reacted badly and we decided to take Scooby back and continue to work on him.
            </p>
            <p style={styles.paragraph}>
              Fast forward to today, Scooby has now improved significantly through training and our volunteers' hard work. He is very food motivated and energetic.
            </p>
            <p style={styles.paragraph}>
              He is now undergoing crisis training to prepare him for his new home. We do believe that there is a home out there for Scooby!
            </p>

            <p style={styles.callToAction}>Help us to help him, sponsor his boarding!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KennelSponsorship;