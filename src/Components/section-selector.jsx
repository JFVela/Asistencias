import { getStudentsBySection } from "../data/students-data"

export function SectionSelector({ onSectionSelect, onStudentsLoad }) {
  const sections = [
    "1ro Secundaria A",
    "1ro Secundaria B",
    "2do Secundaria A",
    "2do Secundaria B",
    "3ro Secundaria A",
    "3ro Secundaria B",
    "4to Secundaria A",
    "4to Secundaria B",
    "5to Secundaria A",
    "5to Secundaria B",
  ]

  const handleSectionSelect = (section) => {
    const students = getStudentsBySection(section)
    onStudentsLoad(students)
    onSectionSelect(section)
  }

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "16px",
  }

  const cardStyle = {
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    border: "2px solid transparent",
  }

  const cardHoverStyle = {
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
    transform: "translateY(-2px)",
    borderColor: "#2196f3",
  }

  const buttonStyle = {
    width: "100%",
    padding: "24px",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    transition: "color 0.3s",
  }

  const iconStyle = {
    fontSize: "32px",
    color: "#2196f3",
  }

  return (
    <div style={gridStyle}>
      {sections.map((section) => (
        <div
          key={section}
          style={cardStyle}
          onMouseOver={(e) => {
            Object.assign(e.currentTarget.style, cardHoverStyle)
          }}
          onMouseOut={(e) => {
            Object.assign(e.currentTarget.style, cardStyle)
          }}
        >
          <button
            onClick={() => handleSectionSelect(section)}
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.color = "#2196f3"
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#333"
            }}
          >
            <span style={iconStyle}>🎓</span>
            <span>{section}</span>
          </button>
        </div>
      ))}
    </div>
  )
}
