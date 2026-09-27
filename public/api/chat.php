<?php
/**
 * SitePulse Gemini PHP Bridge
 * Securely handles chat requests for static hosting environments (Infomaniak).
 */

header('Content-Type: application/json');

// 1. Data & Config
$config = require_once __DIR__ . '/config.php';
$inputData = json_decode(file_get_contents('php://input'), true);

$message = $inputData['message'] ?? '';
$history = $inputData['history'] ?? [];

if (empty($message)) {
    echo json_encode(['error' => 'Message manquant.']);
    exit;
}

// 2. Prepare Gemini Payload
// Note: Gemini 2.0 API structure
$url = "https://generativelanguage.googleapis.com/v1beta/models/" . $config['model'] . ":generateContent?key=" . $config['gemini_api_key'];

$payload = [
    "contents" => array_merge($history, [
        ["role" => "user", "parts" => [["text" => $message]]]
    ]),
    "systemInstruction" => [
        "parts" => [["text" => $config['system_instruction']]]
    ]
];

// 3. API Call via cURL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

// 4. Handle Result
if ($httpCode !== 200) {
    echo json_encode([
        'error' => 'Erreur API Gemini (Code ' . $httpCode . ')',
        'details' => json_decode($response, true)
    ]);
    exit;
}

$data = json_decode($response, true);
$text = $data['candidates'][0]['content']['parts'][0]['text'] ?? 'Désolé, je n\'ai pas pu générer de réponse.';

echo json_encode(['text' => $text]);
