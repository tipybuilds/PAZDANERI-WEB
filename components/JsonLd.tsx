/**
 * Inyecta datos estructurados (JSON-LD) en el HTML.
 * Compatible con export estático: se renderiza en el build.
 */
export default function JsonLd({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
