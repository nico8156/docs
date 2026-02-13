![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)

# Fragments — Architecture Showcase (Docs)

Fragments est un projet vitrine de **conception orientée production** :  
DDD, architecture hexagonale, CQRS + Outbox, event-driven (Kafka), WebSocket push + ACK, résilience mobile (offline-first) et tests E2E reproductibles.

> Ce n’est pas “une app de café”.  
> C’est une démonstration de décisions d’architecture, de trade-offs et de robustesse système.

---

## ✅ Ce que ce repo démontre

- **Découpage par bounded contexts** (Auth, User, Coffee, Social, …)
- **CQRS complet** : write → outbox → projection → read model
- **Outbox transactionnelle** : atomicité DB + event (évite double write / publish)
- **Event-driven (Kafka)** : projection et rebuild du read model
- **Temps réel** : WebSocket push déclenché après projection (+ ACK côté mobile)
- **Mobile résilient** : outbox client (retry/backoff + idempotence + optimistic UI + reconcile)
- **Tests E2E** : scénarios reproductibles avec Testcontainers

---

## 📚 Documentation

La documentation est générée avec **Next.js + Nextra** et contient :
- Architecture overview + diagrammes Mermaid
- CQRS/Outbox + flows (like/comment/ticket verify)
- Runbook (local dev, infra, déploiement)
- ADR + trade-offs + améliorations V2
- Pages “About / Services / CV”

---

## 🚀 Démarrer en local

### Prérequis
- Node.js 20+
- npm


