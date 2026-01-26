# 🔐 API Security Risk Analysis Report

## 📌 Cyber Security Internship Project

This repository contains an **API Security Risk Analysis Report** conducted on a publicly available demo API.  
The objective of this project is to identify common API security vulnerabilities, evaluate their impact, and provide clear remediation recommendations based on industry best practices.

---

## 👩‍💻 Submitted By

**Diksha Gholap**  
Cyber Security Intern  

---

## 📄 Project Overview

- **Project Type:** API Security Risk Analysis  
- **API Tested:** JSONPlaceholder (Public Demo API)  
- **Testing Method:** Manual API testing  
- **Tool Used:** Postman  
- **Documentation:** PDF Report  

---

## 🎯 Objectives of the Analysis

- Analyze API endpoints using a security testing tool  
- Identify common API security vulnerabilities  
- Understand risks related to authentication and authorization  
- Explain security issues in simple, business-friendly language  
- Suggest remediation techniques for securing APIs  

---

## 🛠️ Tools Used

- **Postman** – Sending API requests and analyzing responses  
- **Web Browser** – API validation  
- **MS Word / PDF** – Documentation  

---

## 🔗 API Details

- **API Name:** JSONPlaceholder  
- **Base URL:** https://jsonplaceholder.typicode.com  
- **Purpose:**  
  JSONPlaceholder is a public REST API used for testing, learning, and prototyping. It provides fake but realistic data for development and security analysis.

### Endpoints Tested
- `GET /users` – Retrieves user information  
- `GET /posts` – Retrieves user posts  
- `GET /comments` – Retrieves comments on posts  

---

## 🧪 Methodology

1. Selected a public demo API for testing  
2. Sent GET requests using Postman  
3. Observed API responses in JSON format  
4. Analyzed HTTP response headers  
5. Tested API access without authentication  
6. Identified potential security risks  
7. Documented findings and recommendations  

---

## 🚨 Identified Security Risks

### 1️⃣ Missing Authentication
- **Description:** API endpoints are accessible without authentication.
- **Impact:** Unauthorized users can access sensitive data.
- **Risk Level:** High  
- **OWASP Reference:** API2 – Broken Authentication  
- **Remediation:**  
  - Implement API keys or JWT authentication  
  - Restrict access to sensitive endpoints  

---

### 2️⃣ Broken Authorization
- **Description:** No authorization checks to restrict access to user-specific data.
- **Impact:** Privacy violations and unauthorized data access.
- **Risk Level:** High  
- **OWASP Reference:** API1 – Broken Object Level Authorization  
- **Remediation:**  
  - Implement role-based access control (RBAC)  
  - Validate user permissions for each request  

---

### 3️⃣ Excessive Data Exposure
- **Description:** API responses expose more data than necessary.
- **Impact:** Increased risk of information disclosure.
- **Risk Level:** Medium  
- **OWASP Reference:** API3 – Excessive Data Exposure  
- **Remediation:**  
  - Return only required fields  
  - Apply data filtering mechanisms  

---

### 4️⃣ Missing Rate Limiting
- **Description:** No restriction on the number of API requests.
- **Impact:** Risk of Denial-of-Service (DoS) attacks.
- **Risk Level:** Medium  
- **OWASP Reference:** API4 – Lack of Resources & Rate Limiting  
- **Remediation:**  
  - Implement rate limiting and throttling  
  - Monitor abnormal traffic patterns  

---

## 📊 Risk Impact Summary

| Risk                     | Impact                     | Risk Level |
|--------------------------|----------------------------|------------|
| Missing Authentication  | Unauthorized data access   | High       |
| Broken Authorization    | Data leakage               | High       |
| Excessive Data Exposure | Information disclosure     | Medium     |
| Missing Rate Limiting   | Service disruption         | Medium     |

---

## ✅ Recommendations

- Enforce strong authentication mechanisms  
- Implement authorization checks for all endpoints  
- Limit data exposure in API responses  
- Apply rate limiting to prevent abuse  
- Follow **OWASP API Security Top 10** guidelines  

---

## 📌 Conclusion

This API Security Risk Analysis highlights how common vulnerabilities can exist even in widely used APIs.  
Implementing proper authentication, authorization, and rate limiting can significantly improve API security and reduce the risk of cyber attacks.

---

## ⚠️ Disclaimer

This project was conducted **strictly for educational purposes**.  
The API tested is a public demo API.  
No exploitation or harm was caused during testing.

---

⭐ *Thank you for reviewing this project!*  
